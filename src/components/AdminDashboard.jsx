import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Mail, User, Clock, RefreshCw, Inbox, AlertCircle } from 'lucide-react';


const CONTACT_API = '/api/contact';


/**
 * Admin Dashboard — accessible at /admin
 * Shows all contact form submissions from MongoDB.
 * Simple password gate so it's not fully public.
 */
const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [authed, setAuthed] = useState(false);
  const [pwd, setPwd] = useState('');

  // Simple client-side password gate (not production auth, just to keep it private)
  const ADMIN_PASSWORD = 'jatin@admin123';

  const fetchContacts = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(CONTACT_API);
      setContacts(res.data.data || []);
    } catch (err) {
      setError('Failed to fetch contacts. Make sure the server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authed) fetchContacts();
  }, [authed]);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 w-full max-w-sm">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl border border-blue-100 mb-5 mx-auto">
            <Inbox size={22} className="text-blue-600" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 text-center font-poppins mb-1">Admin Access</h1>
          <p className="text-slate-400 text-sm text-center mb-6">Enter your admin password to view submissions</p>
          <input
            type="password"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && (pwd === ADMIN_PASSWORD ? setAuthed(true) : setError('Incorrect password'))}
            placeholder="Password"
            className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-3"
          />
          {error && <p className="text-red-500 text-xs text-center mb-3">{error}</p>}
          <button
            onClick={() => pwd === ADMIN_PASSWORD ? setAuthed(true) : setError('Incorrect password')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-sm"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 font-poppins">Contact Submissions</h1>
            <p className="text-slate-400 text-sm mt-1">{contacts.length} message{contacts.length !== 1 ? 's' : ''} received</p>
          </div>
          <button
            onClick={fetchContacts}
            disabled={loading}
            className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 text-sm font-semibold px-4 py-2 rounded-xl shadow-sm"
          >
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-xl mb-6 text-sm">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && !error && (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-blue-100 border-t-blue-600 rounded-full" style={{ animation: 'spin 0.8s linear infinite' }} />
          </div>
        )}

        {/* Empty */}
        {!loading && !error && contacts.length === 0 && (
          <div className="text-center py-16">
            <Inbox size={40} className="text-slate-300 mx-auto mb-3" />
            <p className="text-slate-400 font-medium">No submissions yet</p>
            <p className="text-slate-300 text-sm mt-1">Form submissions will appear here</p>
          </div>
        )}

        {/* Contact cards */}
        {!loading && contacts.length > 0 && (
          <div className="space-y-4">
            {contacts.map((c) => (
              <div key={c._id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      <User size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{c.name}</p>
                      <a href={`mailto:${c.email}`} className="text-blue-600 text-xs hover:underline flex items-center gap-1">
                        <Mail size={11} /> {c.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono shrink-0">
                    <Clock size={11} />
                    {formatDate(c.createdAt)}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl px-4 py-3 text-slate-600 text-sm leading-relaxed whitespace-pre-wrap border border-slate-100">
                  {c.message}
                </div>
                {c.ipAddress && (
                  <p className="text-slate-300 text-xs font-mono mt-2">IP: {c.ipAddress}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
