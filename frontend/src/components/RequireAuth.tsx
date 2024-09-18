import { observer } from 'mobx-react';
import { Component, ReactNode } from 'react';
import { Route, Switch } from 'react-router-dom';
import { api } from '../state/backendApi';
import { featureErrors } from '../state/supportedFeatures';
import { uiState } from '../state/uiState';
import { AppFeatures, getBasePath, IsDev } from '../utils/env';
import Login from './misc/login';
import LoginCompletePage from './misc/login-complete';
import { config as appConfig } from '../config';
import { UserData } from '../state/restInterfaces';


@observer
export default class RequireAuth extends Component<{children: ReactNode}> {
    render() {
        const r = this.loginHandling(); // Complete login, or fetch user if needed
        if (r) return r;

        return (
            <>
                <Switch>
                    {/* Login (and callbacks) */}
                    <Route exact path="/login" component={Login} />
                    <Route path="/login/callbacks/:provider" render={p => <LoginCompletePage provider={p.match.params.provider} match={p.match} />}/>
                        {/* Default View */}
                        {this.props.children}
                    <Route path="*">
                    </Route>
                </Switch>
                <FeatureErrorCheck />
            </>
        );
    }

    loginHandling(): JSX.Element | null {
        if (!AppFeatures.SINGLE_SIGN_ON)
        return null;

        const preLogin = <div style={{ background: 'rgb(233, 233, 233)', height: '100vh' }} />;
        const path = window.location.pathname.removePrefix(getBasePath() ?? '');
        const devPrint = function (str: string) { if (IsDev) console.log(`loginHandling (${path}): ` + str); };

        if (path.startsWith('/login'))
        return null; // already in login process, don't interrupt!

        if (api.userData === null && !path.startsWith('/login')) {
            devPrint('known not logged in, hard redirect');
            window.location.pathname = getBasePath() + '/login'; // definitely not logged in, and in wrong url: hard redirect!
            return preLogin;
        }

        if (api.userData === undefined) {
            devPrint('user is undefined (probably a fresh page load)');

            const client = appConfig.authenticationClient;
            if (!client) throw new Error('security client is not initialized');

            client.getIdentity({}).then((r) => {
                api.userData = {
                    canViewConsoleUsers: false,
                    canListAcls: true,
                    canListQuotas: true,
                    canPatchConfigs: true,
                    canReassignPartitions: true,
                    canCreateSchemas: true,
                    canDeleteSchemas: true,
                    canManageSchemaRegistry: true,
                    canViewSchemas: true,
                    canListTransforms: true,
                    canCreateTransforms: true,
                    canDeleteTransforms: true,
                    seat: null as any,
                    user: {
                        providerID: r.authenticationMethod,
                        providerName: '',
                        id: '',
                        internalIdentifier: '',
                        meta: {
                            avatarUrl: '',
                            email: '',
                            name: r.displayName
                        }}
                } as UserData;
            }).catch(() => {
                api.userData = null
            })

            return preLogin;
        } else {
            if (!uiState.isUsingDebugUserLogin)
            devPrint('user is set: ' + JSON.stringify(api.userData));
            return null;
        }
    }
}

@observer
class FeatureErrorCheck extends Component {

    render() {
        if (featureErrors.length > 0) {
            const allErrors = featureErrors.join(' ');
            throw new Error(allErrors);
        }
        return null;
    }
}

