import React from 'react';

class Navigation extends React.Component {

    clasd = (id) => {

        console.log(id, this.props.selectId);
        return id === this.props.selectId ? "active blue darken-1" : "waves-effect";
    }

    render() {

        const { selectId, select } = this.props;
        const h = [0 + selectId, 1 + selectId, 2 + selectId, 3 + selectId, 4 + selectId, 5 + selectId];
        return (<ul className="pagination" style={{ padding: 10 }}>
            <li onClick={() => select(selectId - 1)} className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            {
                h.map((indx) => <li onClick={() => select(indx)} className={this.clasd(indx)}><a href="#!">{indx}</a></li>)
            }
            <li onClick={() => select(selectId + 1)} className="disabled"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul >)
    }
}

export default Navigation;