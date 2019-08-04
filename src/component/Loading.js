import React from 'react';

const Loading = (props) => <div className={"loading "+props.size}>
    <img src={require('../asset/spinner.svg')}/>
    <h2>Loading</h2>
</div>

export default Loading;