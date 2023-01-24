import style from './Git.module.css';
import { RepositoriesGit } from '../assets/RepositoriesGit';

export function Git(){
    return (
        <div className={style.page}>
            <h2>Git Repositories</h2>
            <RepositoriesGit titulo="node-estudos-API" link="https://github.com/Willian-smach/node-estudos-API" />
            <RepositoriesGit titulo="Simple-chat-node" link="https://github.com/Willian-smach/Simple-chat-node.js" />
            <RepositoriesGit titulo="Purple-login-Screen" link="https://github.com/Willian-smach/Purple-login-Screen" />
            <RepositoriesGit titulo="api-autenticacao" link="https://github.com/Willian-smach/api-autenticacao" />
            <RepositoriesGit titulo="mini-mail" link="https://github.com/Willian-smach/mini-mail" />
        </div>
    );
}