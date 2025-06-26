export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
      <p>
        © {new Date().getFullYear()} MySite. All rights reserved.
        <span className="block mt-1">
          <a href="/privacy" className="underline">Privacy Policy</a> | <a href="/terms" className="underline">Terms</a>
        </span>
      </p>
    </footer>
  );
}
