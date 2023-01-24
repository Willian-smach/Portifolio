import style from './RepositoriesGit.module.css';

export function RepositoriesGit({titulo, link}){
    return (
        <div className={style.repositorie}>
            <p><span>{titulo}</span></p>
            <a href={link}>Access</a>
        </div>
    );
}