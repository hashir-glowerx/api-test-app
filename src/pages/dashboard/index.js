import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../api/todo";
import { useHistory } from "react-router";
import { setTodo, addTodo, deleteTodo } from "../../store/actions";
import { Grid} from "@mui/material";
import "./index.css";
const Dashboard = () => {
  const history = useHistory();
  const todos = useSelector((state) => state.app.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async (page) => {
      const result = await getTodos(page);
      dispatch(setTodo(result.data));
    };
    fetchTodos(1);
  }, []);

  const handleClick = (event, cellValues) => {

    // alert(JSON.stringify(cellValues.row.id));
    dispatch(deleteTodo(cellValues.row.id));
  };
  const renderDataTable = () => {
    const columns = [
      { field: "id", headerName: "ID", width: 180 },
      { field: "title", headerName: "List", width: 650 },
      { field: "completed", headerName: "Status", width: 180 },
      {
        field: "DELETE",
        width: 180,
        renderCell: (cellValues) => {
          return (
            <button
              className="button__rows"
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              DELETE
            </button>
          );
        },
      },
    ];
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid rows={todos} columns={columns}  />
      </div>
    );
  };

  const addTodoItem = () => {
    dispatch(
      addTodo({
        userId: 1,
        id: 11,
        completed: false,
        title: "My name is zeeshan Noor",
      }),
    );
  };

  const handleOnLogOut = () => {
    let token = localStorage.getItem("login");
    if (token) {
      localStorage.setItem("login", "");
      history.push("/login");
      return false;
    }
  };
  return (
    <Layout>
      <Grid item={true} className="grid__container" sm={8} xs={6} md={12}>
        <h1>Dashboard</h1>
        <div className="dashboard">
          <button
            className="button__logout__dashboard"
            onClick={() => handleOnLogOut()}
          >
            LogOut
          </button>
          <button
            className="button__addItem__dashboard"
            onClick={() => addTodoItem()}
          >
            Add Todo
          </button>
        </div>
        {renderDataTable()}
      </Grid>
    </Layout>
  );
};
export default Dashboard;
