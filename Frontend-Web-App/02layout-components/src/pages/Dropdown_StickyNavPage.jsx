import StickyHeader from "../components/StickyHeader";

const Dropdown_StickyNavPage = () => {
    return (
        <>
            <StickyHeader />
            <main className="pt-20">
                <h2 className="text-2xl p-4">Content Below the Header</h2>
                <div className="h-screen"></div>
            </main>
        </>
    );
};

export default Dropdown_StickyNavPage;
