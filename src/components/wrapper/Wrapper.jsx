import Body from '../body/Body';
import Sidenav from '../../components/sidenav/Sidenav';


export const Wrapper = () => {
    return (
        <div className="main">
            <Sidenav />
            <Body />
        </div>
    )
}

export default Wrapper;