import React, { useState } from "react";
import "../styles/Settings.css";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [preferences, setPreferences] = useState({
    theme: "light", // or 'dark'
    notifications: true,
  });

  // Handle input changes for profile settings
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle preferences toggle
  const handlePreferenceChange = (e) => {
    const { name, type, checked, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      {/* Profile Section */}
      <section>
        <h2>Profile Settings</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
          />
        </label>
      </section>

      {/* Preferences Section */}
      <section>
        <h2>Preferences</h2>
        <label>
          Theme:
          <select
            name="theme"
            value={preferences.theme}
            onChange={handlePreferenceChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <br />
        <label>
          Notifications:
          <input
            type="checkbox"
            name="notifications"
            checked={preferences.notifications}
            onChange={handlePreferenceChange}
          />
        </label>
      </section>
    </div>
  );
};

export default Settings;
