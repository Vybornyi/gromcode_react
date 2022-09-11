const baseUrl = 'https://62e0303a98dd9c9df60f6e25.mockapi.io/tasks/';

export const fetchTasksList = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      throw new Error('Failed to downloaded tasks');
    }
    return response.json();
  });
export const createTask = task =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });
export const changeStatusTask = (taskData, taskId) =>
  fetch(`${baseUrl}${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to change status');
    }
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
