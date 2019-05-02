import { connect } from 'react-redux';
import FooterCom from '../components/footerCom';
import { getName} from '../action/searchAt';
import { getToken } from '../action/userAt';

const mapStateToProps = (state, props) => {
    return {
        token:getToken(state),
        name: getName(state, props)
    }
}

export default connect(mapStateToProps)(FooterCom);
