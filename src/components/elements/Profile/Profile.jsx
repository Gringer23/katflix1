import style from './Profile.module.scss'

const Profile = () => {
    return(
        <div className={style['profile-wrapper']}>
            <div className={style.notification}>
            <i className='bx bxs-bell'></i>
            <span></span>
            </div>
            <div className={style.profile}>
                <div>
                    <img
                    src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50'
                    alt=''
                    />
                </div>
                <i className='bx bx-caret-down'></i>
            </div>
        </div>

    )
}

export default Profile;