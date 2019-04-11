import { connect } from 'react-redux';
import FooterCom from '../components/footerCom';
import { getName} from '../ducks/searchDk';


const mapStateToProps = (state, props) => {
    return {
        name: getName(state, props)
    }
}

export default connect(mapStateToProps)(FooterCom);
