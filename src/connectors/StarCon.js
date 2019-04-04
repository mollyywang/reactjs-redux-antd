import { connect } from 'react-redux';
import StarCom from '../components/StarCom';
import { getItems, removeFromStar,starGet } from '../ducks/starDk';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        // page:getPage(state, props),
        // counts:getCounts(state, props),
        // index:getIndex(state, props),
        // allnums:getNums(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromStar: (id) => dispatch(removeFromStar(id)),
    starGet: () => dispatch(starGet()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StarCom);
