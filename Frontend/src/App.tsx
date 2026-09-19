import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicLayout, PortalLayout } from './layouts/Layouts'
import { HomePage, AuthPage, PortalPage, ScannerPage, ReportPage, ConversationPage, NotFoundPage } from './Pages/Pages'
import { AlertsPage, AuthorityDashboard, HotelAnalytics, HotelDashboard, IncidentDetailPage, IncidentsPage } from './Pages/Operations'

export default function App() {
  return <BrowserRouter><Routes>
    <Route element={<PublicLayout />}><Route path="/" element={<HomePage />} /><Route path="/login" element={<AuthPage mode="login" />} /><Route path="/register" element={<AuthPage mode="register" />} /></Route>
    <Route path="/:role" element={<PortalLayout />}><Route index element={<PortalPage />} /><Route path="food-scanner" element={<ScannerPage />} /><Route path="food-analysis" element={<ScannerPage />} /><Route path="report" element={<ReportPage />} /><Route path="report/conversation" element={<ConversationPage />} /><Route path="complaints" element={<PortalPage />} /><Route path="complaints/:id" element={<PortalPage />} /><Route path="incidents" element={<IncidentsPage />} /><Route path="incidents/:id" element={<IncidentDetailPage />} /><Route path="alerts" element={<AlertsPage />} /><Route path="analytics" element={<HotelAnalytics />} /><Route path="users" element={<PortalPage />} /><Route path="hotels" element={<PortalPage />} /><Route path="authorities" element={<PortalPage />} /><Route path="system" element={<PortalPage />} /></Route>
    <Route path="/authority" element={<PortalLayout />}><Route index element={<AuthorityDashboard />}/></Route><Route path="/hotel" element={<PortalLayout />}><Route index element={<HotelDashboard />}/></Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes></BrowserRouter>
}
