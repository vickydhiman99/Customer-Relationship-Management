import React, { Component } from "react";
import { connect } from "react-redux";
// import Vieworg from "../../../../auth/components/vieworg";
import {
  close_snack_bar
} from "../../../../common/snackbar/action";
import {
 
  addTask,
  viewAllTask,
  viewTaskById,
  editTask,
  deleteTask,
  viewAllTaskByDate,
  assignExecutiveToManager,
  viewNewLeadsByExecutive,
  viewAssignedByLeads,
  viewLeadsByExecutive,
  viewExecutivesByManager,
  filter_allotment,
  
  set_task_desc,
  set_priority,
  set_task,
  set_due_date,
  set_assign_to,

} from "../../actions";
export class Controller extends Component {
  render() {
    return (
      <Vieworg {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    allotment: store.allotment,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    addTask:(org_id,assign_to,due_date,leads,task,priority,task_description) => {
      dispatch(addTask(org_id,assign_to,due_date,leads,task,priority,task_description) )
    },
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    viewAllTask:(org_id) => {
      dispatch(viewAllTask(org_id));
    },
    viewTaskById:(task_id)=> {
      dispatch(viewTaskById(task_id));
    },
    editTask:(task_id,assign_to,due_date,leads,task,priority,task_description)=> {
      dispatch(editTask(task_id,assign_to,due_date,leads,task,priority,task_description));
    },
    deleteTask:(task_id)=> {
      dispatch( deleteTask(task_id));
    },
    viewAllTaskByDate:(date) => {
      dispatch(viewAllTaskByDate(date));
    },
    assignExecutiveToManager:(org_id, executive_id, manager_id) => {
      dispatch(assignExecutiveToManager(org_id, executive_id, manager_id));
    },
    viewExecutivesByManager: (manager_id) => {
      dispatch(viewExecutivesByManager(manager_id));
    },
    viewLeadsByExecutive: (executive_id) => {
      dispatch(viewLeadsByExecutive(executive_id));
    },
    viewAssignedByLeads: (user_id, org_id) => {
      dispatch(viewAssignedByLeads(user_id, org_id));
    },
    viewNewLeadsByExecutive: (executive_id) => {
      dispatch(viewNewLeadsByExecutive(executive_id));
    },
    filter_allotment: (task, e) => {
      dispatch(filter_allotment(task, e));
    },

    set_assign_to: (payload) => {
      dispatch(set_assign_to(payload));
    },
    set_due_date: (payload) => {
      dispatch(set_due_date(payload));
    },
    set_task: (payload) => {
      dispatch(set_task(payload));
    },
    set_priority: (payload) => {
      dispatch(set_priority(payload));
    },
    set_task_desc: (payload) => {
      dispatch(set_task_desc(payload));
    },
   
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);