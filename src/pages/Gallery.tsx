const IMAGES = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1427504494785-319ce8382ac2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Photo Gallery</h1>
          <p className="text-lg text-slate-600">
            A glimpse into the life, activities, and state-of-the-art facilities at King Universe Matric Higher Secondary School.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((img, idx) => (
            <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
              <img 
                src={img} 
                alt={`School image ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/20 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
