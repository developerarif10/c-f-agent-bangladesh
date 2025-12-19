import { client } from '@/lib/sanity';
import { AlertCircle, ArrowLeft, CheckCircle2, Clock, Package, Truck } from 'lucide-react';
import Link from 'next/link';

// Force dynamic rendering to ensure fresh data for tracking
export const dynamic = 'force-dynamic';

async function getShipment(id) {
  try {
    // Query to fetch shipment by trackingId
    const query = `*[_type == "shipment" && trackingId == $id][0]`;
    const shipment = await client.fetch(query, { id });
    return shipment;
  } catch (error) {
    console.error("Error fetching shipment:", error);
    return null;
  }
}

export default async function TrackingPage({ params }) {
  const { id } = await params;
  const shipment = await getShipment(id);

  if (!shipment) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5722]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/5 p-10 rounded-3xl max-w-lg w-full text-center shadow-2xl relative z-10 box-border">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner ring-1 ring-white/10">
            <Package className="w-10 h-10 text-[#FF5722] opacity-80" />
          </div>
          
          <h1 className="text-3xl font-bold mb-3 tracking-tight">Shipment Not Found</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We couldn't locate any shipment with ID: 
            <br />
            <span className="text-[#FF5722] font-mono font-bold bg-[#FF5722]/5 px-3 py-1 rounded-md mt-2 inline-block border border-[#FF5722]/20">{id}</span>
          </p>
          
          <div className="flex flex-col gap-3">
             <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 font-bold py-3.5 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ArrowLeft className="w-5 h-5" />
              Try Another ID
            </Link>
             <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-white font-medium py-2 px-6 rounded-lg transition-colors text-sm"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Sort timeline by date descending (latest first)
  const sortedTimeline = shipment.timeline?.sort((a, b) => new Date(b.date) - new Date(a.date)) || [];
  const latestStatus = sortedTimeline[0];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-16 px-4 sm:px-6 lg:px-8 relative">
       {/* Ambient Background */}
       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#FF5722]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Tracking Search
        </Link>
        
        {/* Status Card */}
        <div className="bg-[#0F0F0F] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl mb-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5722]/5 blur-[80px] rounded-full -mr-32 -mt-32"></div>

             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div>
                <p className="text-sm text-gray-500 font-mono mb-2 flex items-center gap-2">
                   <Truck className="w-4 h-4" />
                   TRACKING ID
                </p>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight font-mono">{shipment.trackingId}</h1>
              </div>
              
              <div className="flex flex-col items-start md:items-end">
                 <p className="text-sm text-gray-500 font-mono mb-2 text-right">CURRENT STATUS</p>
                 <div className="inline-flex items-center gap-3 bg-[#FF5722]/10 border border-[#FF5722]/20 px-5 py-2.5 rounded-full backdrop-blur-md">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5722]"></span>
                    </span>
                    <span className="text-[#FF5722] font-bold text-lg tracking-wide">{shipment.status}</span>
                 </div>
              </div>
            </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3">
                <div className="bg-[#0F0F0F] border border-white/5 rounded-3xl p-6 md:p-10 relative">
                  <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-[#FF5722]" />
                    Shipment Journey
                  </h2>

                  <div className="relative pl-6 sm:pl-8">
                    {/* Vertical Line */}
                    <div className="absolute top-2 bottom-6 left-[31px] sm:left-[39px] w-[2px] bg-gradient-to-b from-[#FF5722]/50 via-white/10 to-transparent"></div>

                    <ul className="space-y-12">
                      {sortedTimeline.length > 0 ? (
                        sortedTimeline.map((item, index) => {
                          const isLatest = index === 0;
                          return (
                            <li key={item._key || index} className="relative pl-12 sm:pl-16 group">
                              {/* Connector Dot */}
                              <div className={`absolute left-[20px] sm:left-[28px] top-1 w-6 h-6 rounded-full border-[3px] flex items-center justify-center z-10 transition-all duration-300
                                ${isLatest 
                                    ? 'bg-[#FF5722] border-[#0a0a0a] shadow-[0_0_0_4px_rgba(255,87,34,0.2)] scale-110' 
                                    : 'bg-[#1a1a1a] border-gray-700 group-hover:border-[#FF5722]/50'}
                              `}>
                                 {isLatest && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                              </div>

                              {/* Content Card */}
                              <div className={`relative transition-all duration-300 ${isLatest ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                                <h3 className={`font-bold text-xl mb-1 ${isLatest ? 'text-white' : 'text-gray-300'}`}>
                                  {item.title}
                                </h3>
                                <time className="block text-sm text-[#FF5722] font-mono mb-3">
                                  {new Date(item.date).toLocaleDateString(undefined, {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                                      weekday: 'long',
                                   })}
                                   <span className="mx-2 text-gray-600">•</span>
                                   {new Date(item.date).toLocaleTimeString(undefined, {
                                      hour: '2-digit',
                                      minute: '2-digit'
                                   })}
                                </time>
                                
                                {item.description && (
                                  <div className={`p-4 rounded-xl border ${isLatest ? 'bg-white/5 border-white/10' : 'bg-transparent border-transparent pl-0'}`}>
                                      <p className="text-gray-400 leading-relaxed">
                                        {item.description}
                                      </p>
                                  </div>
                                )}
                              </div>
                            </li>
                          );
                        })
                      ) : (
                        <li className="text-gray-500 italic pl-10 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            No events recorded yet.
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
