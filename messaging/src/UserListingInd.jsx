export default function UserListingInd({ name, status }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{status}</h6>
        </div>
      </div>
    </>
  );
}
