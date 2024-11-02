/* eslint-disable @typescript-eslint/no-explicit-any */
import { removeAssignment } from "@/app/kanbas/store/reducers/assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";

export default function RemoveAssignmentDialog({
  assignmentId,
}: {
  assignmentId: number;
}) {
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find((a: any) => a._id === assignmentId);
  const dispatch = useDispatch();

  return (
    <div
      id={`wd-remove-assignment-${assignmentId}-dialog`}
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Remove assignment?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3 text-wrap">
              Are you sure you want to remove the assignment{" "}
              <strong>{assignment?.title}</strong>?
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => dispatch(removeAssignment(assignmentId))}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}