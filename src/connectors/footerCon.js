import { connect } from 'react-redux';
import FooterCom from '../components/footerCom';
import { getName} from '../ducks/searchDk';
import { getToken } from '../ducks/userDK';

const mapStateToProps = (state, props) => {
    return {
        token:getToken(state),
        name: getName(state, props)
    }
}

export default connect(mapStateToProps)(FooterCom);
