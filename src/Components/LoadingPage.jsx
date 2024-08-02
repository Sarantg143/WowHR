const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-12 h-12 border-4 border-b-4 rounded-full border-t-white border-opacity-30 animate-spin"></div>
    </div>
  );
};

export default LoadingPage;
