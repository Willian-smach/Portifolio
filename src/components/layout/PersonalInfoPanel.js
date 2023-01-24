import style from './PersonalInfoPanel.module.css';

export function PersonalInfoPanel(){
    return (
        <div className={style.panel}>
            <div className={style.div_img}>
                <img src="https://avatars.githubusercontent.com/u/28637375?s=400&u=fcc63dbf4dc8ca1a11d9df8b1c724b692dc42398&v=4" alt="user" />
            </div>
            <div className={style.div_info}>
                <div className={style.nome}>
                    <h2>Willian</h2>
                    <h2>Silva</h2>
                </div>
                <p>Full-Stack Developer</p>
            </div>
        </div>
    );
}