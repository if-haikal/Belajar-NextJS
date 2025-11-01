export default function ForbiddenPage() {
    return (
        <div className="mx-2">
            <h1 className="text-3xl font-bold underline text-red-600">
                403 - Forbidden Page
            </h1>
            <p className="mt-4 text-lg">
                You do not have permission to access this page.
            </p>
        </div>
    );
}