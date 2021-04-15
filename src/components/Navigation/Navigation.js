import React from 'react';
 

class Navigation extends React.Component {

    clasd = (id) => {

        return id === this.props.selectId ? "active blue darken-1" : "waves-effect";
    }

    render() {

        const { selectId, select } = this.props;

        console.log(selectId);

        const h = selectId < 3 ? [1, 2, 3, 4, 5] : [+selectId - 2, +selectId - 1, +selectId, +selectId + 1, +selectId + 2];

        return (<ul className="pagination" style={{ padding: 10 }}>
            <li onClick={() => selectId => 1 ? select(selectId - 1) : null} className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            {
                h.map((indx) =>
                    <li key={indx}
                        onClick={() => select(indx)}
                        className={this.clasd(indx)}><a href="#!" to={indx}>{indx}</a>
                    </li>)
            }
            <li onClick={() => select(selectId + 1)} className="disabled"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul >)
    }
}

export default Navigation;