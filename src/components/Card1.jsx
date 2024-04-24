export default function cards() {
  return (
    <div className="card w-96 bg-white shadow-xl">
      <div className="p-4 flex flex-col items-center justify-center gap-1">
        <p className="text-slate-500 font-bold">FREE</p>
        <h2 className="card-title text-5xl text-black ">$0/month</h2>
      </div>
      <div className="card-body items-start text-center text-black ">
        <div className="float-left  pb-2 flex flex-col items-start justify-center gap-3">
          <p>✔ Single User</p>
          <p>✔ 50GB Storage</p>
          <p>✔ Unlimited Public Projects</p>
          <p>✔ Community Access</p>
          <p>✖ Unlimited Private Projects</p>
          <p>✖ Dedicated Phone Support</p>
          <p>✖ Free Subdomain</p>
          <p>✖ Monthly Status Reports</p>
        </div>
        <div className="card-actions w-full">
          <button className="btn btn-block bg-sky-500 text-white rounded-full hover:bg-sky-600 border-none">Button</button>
        </div>
      </div>
    </div>
  );
}