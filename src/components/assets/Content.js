import style from './Content.module.css';

export function Content(props){
    return (
        <div className={style.content}>
            {props.children}
        </div>
    );
}