const Error = ({ isError }: { isError: boolean }) => {
    if (!isError) return null; // Nếu không có lỗi, không hiển thị gì

    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
            <h1 className="text-3xl tracking-widest text-gray-500 uppercase">404 | Not Found</h1>
        </div>
    );
}
export default Error;