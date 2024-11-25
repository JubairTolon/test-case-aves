function SocialProofCard() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 my-8">
      <div className="flex items-center mb-4">
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 3.102a1 1 0 011.902 0l1.356 4.175a1 1 0 00.95.69h4.41c.969 0 1.371 1.24.588 1.81l-3.56 2.58a1 1 0 00-.364 1.118l1.356 4.176c.3.923-.755 1.688-1.54 1.118l-3.561-2.58a1 1 0 00-1.175 0l-3.561 2.58c-.784.57-1.838-.195-1.54-1.118l1.356-4.176a1 1 0 00-.364-1.118L2.097 9.777c-.784-.57-.38-1.81.588-1.81h4.41a1 1 0 00.95-.69l1.356-4.175z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-4">
        “The taste is fresh, and I love that it’s better for the environment.
        Switching to recyclable cartons was a no-brainer!”
      </p>
      <div className="text-gray-800 font-semibold">- Emily R., Customer</div>
    </div>
  );
}

export default SocialProofCard;
