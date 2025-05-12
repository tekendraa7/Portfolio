export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} CyberShield Portfolio. All rights reserved.</p>
        <p>
          Built by <a href="https://www.linkedin.com/in/tekendra-bhandari/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Tekendra Bhandari</a>.
        </p>
      </div>
    </footer>
  );
}
