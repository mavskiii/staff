import { useState } from "react";
import Button from "./Button";
import ProfileField from "./ProfileField";
import SecurityAction from "./SecurityAction";

const LockIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

const SignOutIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 17l5-5-5-5" />
    <path d="M15 12H3" />
    <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
  </svg>
);

const profileFields = [
  { label: "First Name", value: "Miguel" },
  { label: "Last Name", value: "Reyes" },
  { label: "Work Email", value: "m.reyes@gmail.com" },
  { label: "Mobile No.", value: "+63 991 850 6718" },
  { label: "Mobile No.", value: "+63 991 850 6718" },
  { label: "Staff ID", value: "EM-0241" },
  { label: "Assigned Facility", value: "Paco Park School · Paco, Manila" },
];

const ProfileDashboard = () => {
  const [notice, setNotice] = useState("");

  return (
    <main className="ml-49.5 min-h-screen bg-[#e9edf7] p-6 max-sm:ml-0 max-sm:p-4">
      <header className="mb-3">
        <h1 className="text-[20px] font-bold leading-tight text-[#273556]">
          Profile
        </h1>
        <p className="mt-1 text-[11px] text-[#8290aa]">
          Manage your account and security
        </p>
      </header>

      <section
        aria-label="Staff account summary"
        className="mb-4 rounded-[20px] bg-white px-3 py-3 shadow-[0_8px_20px_rgba(40,60,100,0.08)] sm:px-3"
      >
        <h2 className="text-[12px] font-bold text-[#34405f]">Miguel Reyes</h2>
        <p className="text-[9px] text-[#5f7197]">m.reyes@gmail.com</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#e9edf5] px-3 py-1 text-[8px] font-semibold text-[#7180a0]">
            Paco Park School
          </span>
          <span className="rounded-full bg-[#e9edf5] px-3 py-1 text-[8px] font-semibold text-[#7180a0]">
            Joined Mar 2025
          </span>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
        <section aria-labelledby="account-information-heading">
          <h2
            id="account-information-heading"
            className="mb-3 text-[8px] font-semibold uppercase tracking-[1px] text-[#9aa8c5]"
          >
            Account Information
          </h2>
          <div className="min-h-[455px] rounded-[20px] bg-white p-3 shadow-[0_8px_20px_rgba(40,60,100,0.08)] sm:p-3">
            <div className="space-y-2">
              {profileFields.map(({ label, value }, index) => (
                <ProfileField key={`${label}-${index}`} label={label} value={value} />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="security-heading">
          <h2
            id="security-heading"
            className="mb-3 text-[8px] font-semibold uppercase tracking-[1px] text-[#9aa8c5]"
          >
            Security
          </h2>
          <div className="space-y-2 rounded-[20px] bg-white p-3 shadow-[0_8px_20px_rgba(40,60,100,0.08)]">
            <SecurityAction
              icon={<LockIcon />}
              title="Password"
              description="via email OTP"
              actionLabel="Change"
              showArrow
              onClick={() =>
                setNotice(
                  "Password changes are handled through the email OTP sign-in flow.",
                )
              }
            />
            <SecurityAction
              icon={<SignOutIcon />}
              title="Sign out to all other devices"
              actionLabel="Sign out to all other devices"
              variant="danger"
              onClick={() =>
                setNotice(
                  "Device sign-out is unavailable because authentication is not connected.",
                )
              }
            />
            <SecurityAction
              icon={<SignOutIcon />}
              title="Sign out"
              actionLabel="Sign out"
              variant="danger"
              onClick={() =>
                setNotice(
                  "Sign-out is unavailable because authentication is not connected.",
                )
              }
            />
            {notice && (
              <div
                role="status"
                className="rounded-xl bg-[#f6f8fc] px-3 py-2 text-[10px] text-[#65718c]"
              >
                <p>{notice}</p>
                <Button
                  variant="neutral"
                  onClick={() => setNotice("")}
                  className="mt-2 px-2 py-1 text-[9px]"
                >
                  Dismiss
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProfileDashboard;
