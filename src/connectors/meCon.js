import { connect } from 'react-redux';
import MeCom from '../components/meCom';
import { getName,getToken} from '../ducks/userDK';

const mapStateToProps = (state, props) => {
    return {
        username:getName(state),
        token:getToken(state)
    }
}

export default connect(mapStateToProps)(MeCom);
