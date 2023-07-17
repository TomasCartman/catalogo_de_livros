import style from './PageUp.module.css'
import { AiOutlineArrowUp } from 'react-icons/ai'
import windowUtils from '@/utils/windowUtils'

export default function PageUp() {

    return (
        <div className={style.pageup} onClick={windowUtils.goToTopOfPage}>
            <AiOutlineArrowUp size={25} className='icon' />
        </div>
    )
}