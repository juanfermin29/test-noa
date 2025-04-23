

export default function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container mx-auto px-4 py-8">
            {children}
        </div>
    );
}
