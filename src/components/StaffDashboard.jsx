import ResourceCard from "./ResourceCard";

const StaffDashboard = () => {
  return (
    <main className="ml-49.5 min-h-screen bg-[#e9edf7] p-6 max-sm:ml-0 max-sm:p-4">

      {/* Dashboard Container */}
      <div className="min-h-[calc(100vh-48px)]">

        {/* Page Header */}
        <div className="mb-5">
          <h1 className="text-[20px] font-bold text-[#273556]">
            My Facility
          </h1>

          <p className="mt-1 text-[11px] text-[#8290aa]">
            Paco Park School · Paco, Manila
          </p>
        </div>


        {/* Facility Header */}
        <div className="mb-5 flex min-h-20.5 flex-wrap items-center justify-between gap-3 rounded-[20px] bg-white px-5 shadow-[0_8px_20px_rgba(40,60,100,0.08)]">

          {/* Facility Information */}
          <div className="flex flex-wrap items-center gap-4">

            {/* Facility Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf1ff]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="text-[#4e6af3]"
              >
                <path d="M3 21h18" />
                <path d="M5 21V7l7-4 7 4v14" />
                <path d="M9 21v-6h6v6" />
              </svg>
            </div>

            {/* Facility Name */}
            <div>
              <h2 className="text-[13px] font-bold text-[#34405f]">
                Paco Park School
              </h2>

              <p className="text-[9px] text-[#8995ad]">
                Occupancy 312/400
              </p>
            </div>

            {/* Sync */}
            <div className="ml-3 flex items-center gap-2 rounded-full bg-[#f7f8fc] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#42c98b]" />

              <span className="text-[9px] font-medium text-[#65718c]">
                Synced
              </span>
            </div>

          </div>


          {/* Dashboard Buttons */}
          <div className="flex items-center gap-2">

            {/* All */}
            <button className="rounded-xl bg-[#5269ef] px-7 py-2.5 text-[9px] font-semibold text-white shadow-sm transition hover:bg-[#4058df]">
              All
            </button>

            {/* Limited */}
            <button className="rounded-xl bg-[#f7f8fc] px-5 py-2.5 text-[9px] font-semibold text-[#8290aa] transition hover:bg-white hover:text-[#5269ef]">
              Limited
            </button>

            {/* Availability */}
            <button className="rounded-xl bg-[#f7f8fc] px-5 py-2.5 text-[9px] font-semibold text-[#8290aa] transition hover:bg-white hover:text-[#5269ef]">
              Availability
            </button>

          </div>

        </div>


        {/* Resource Cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

          <ResourceCard
            title="Beds"
            subtitle="Available beds"
            value="88"
            unit="available"
            percentage={72}
          />

          <ResourceCard
            title="Water"
            subtitle="Clean drinkable water"
            value="Available"
            percentage={90}
          />

          <ResourceCard
            title="Food"
            subtitle="Ready meals"
            value="180"
            unit="meals"
            percentage={65}
          />

          <ResourceCard
            title="Medical Kits"
            subtitle="Sealed & stocked"
            value="12"
            unit="kits"
            percentage={80}
          />

          <ResourceCard
            title="Toilets"
            subtitle="Comfort rooms"
            value="Available"
            percentage={75}
          />

          <ResourceCard
            title="Generators"
            subtitle="Electricity supply"
            value="Available"
            percentage={60}
          />

        </section>

      </div>

    </main>
  );
};

export default StaffDashboard;