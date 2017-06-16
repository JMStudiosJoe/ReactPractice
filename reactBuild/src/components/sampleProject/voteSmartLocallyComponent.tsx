import * as React from "react";

import store from "../../redux/store/store"

const VoteSmartLocallyComponent = ({},{}) => {

    store.dispatch({type: "LOOKUP_ADDRESS", payload: this.state});
    return (
        <div>
            vote smart kids
            need to connect the redux and suff to make request
            <input type='text' placeholder='Address' />
        </div>
    );

}

export default VoteSmartLocallyComponent;
