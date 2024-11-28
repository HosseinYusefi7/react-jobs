import React from 'react';
import './index.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import Jobs from './pages/Jobs';
import AddJob from './pages/AddJob';
import NotFoundPage from './pages/NotFoundPage';
import Job, { jobLoader } from './pages/Job';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };
  const updateJob = async (updtatedJob) => {
    const res = await fetch(`/api/jobs/${updtatedJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updtatedJob),
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/jobs/:id"
          deleteJob={deleteJob}
          element={<Job />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updtatedJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
