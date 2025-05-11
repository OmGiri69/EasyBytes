import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProjectsPage from './pages/admin/AdminProjectsPage';
import AdminSkillsPage from './pages/admin/AdminSkillsPage';
import AdminAboutPage from './pages/admin/AdminAboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'projects/:id',
        element: <ProjectDetailPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'admin',
        element: <AdminLoginPage />
      },
      {
        path: 'admin/dashboard',
        element: <ProtectedRoute><AdminDashboardPage /></ProtectedRoute>
      },
      {
        path: 'admin/projects',
        element: <ProtectedRoute><AdminProjectsPage /></ProtectedRoute>
      },
      {
        path: 'admin/skills',
        element: <ProtectedRoute><AdminSkillsPage /></ProtectedRoute>
      },
      {
        path: 'admin/about',
        element: <ProtectedRoute><AdminAboutPage /></ProtectedRoute>
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

export default router;