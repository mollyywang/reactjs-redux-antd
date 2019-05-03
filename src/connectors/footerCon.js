import { connect } from 'react-redux';
import FooterCom from '../components/footerCom';
import { getName } from '../actions/searchAt';
import { getToken } from '../actions/userAt';

const mapStateToProps = (state, props) => {
    return {
        token: getToken(state),
        name: getName(state, props)
    }
}

export default connect(mapStateToProps)(FooterCom);
