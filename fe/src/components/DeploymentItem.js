import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import deleteDeployment from '../services/deleteDeployment';

const DeploymentItem = (props) => {
    const deploymentList = useSelector(state => state.deploymentList)
    const dispatch = useDispatch();

    const removeDeploymentItem = (deploymentId) => {
        deleteDeployment(deploymentId).then(data => {
            if(!data) return
            let newDeploymentList = deploymentList.filter(item => item._id !== deploymentId);
            dispatch({type: 'REMOVE_DEPLOYMENT', payload: newDeploymentList})
        })

    }

    return (
        <tr key={props.item._id}>
            <td>{props.item.version}</td>
            <td>{props.item.templateName}</td>
            <td>{props.item.url}</td>
            <td
                onClick={() => {
                removeDeploymentItem(props.item._id)
            }}
                className="secondary-content">
                <i className="remove-btn material-icons blue-text">clear</i>
            </td>
        </tr>
    );
}

export default DeploymentItem;
