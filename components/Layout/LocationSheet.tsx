import React, { useState } from 'react';
import { X, Search, MapPin, Navigation, Clock } from 'lucide-react';

interface LocationSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (location: string) => void;
}

const LocationSheet: React.FC<LocationSheetProps> = ({ isOpen, onClose, onSelectLocation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCurrentLocation = () => {
    setIsLoading(true);
    setErrorMsg(null);

    if (!navigator.geolocation) {
      setErrorMsg('이 브라우저에서는 위치 정보를 지원하지 않습니다.');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // In a real app, we would use a Geocoding API here (Lat/Lng -> Address).
        // Simulating API delay and response for UX demonstration.
        setTimeout(() => {
          setIsLoading(false);
          // Mock Result based on successful GPS
          onSelectLocation('서울시 강남구'); 
          onClose();
        }, 1500);
      },
      (error) => {
        setIsLoading(false);
        switch(error.code) {
          case error.PERMISSION_DENIED:
            setErrorMsg('위치 권한이 거부되었습니다. 설정에서 허용해주세요.');
            break;
          case error.POSITION_UNAVAILABLE:
            setErrorMsg('위치 정보를 사용할 수 없습니다.');
            break;
          case error.TIMEOUT:
            setErrorMsg('위치 확인 시간이 초과되었습니다.');
            break;
          default:
            setErrorMsg('알 수 없는 오류가 발생했습니다.');
        }
      }
    );
  };

  const handleManualSelect = (loc: string) => {
    onSelectLocation(loc);
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Sheet Content */}
      <div className="relative w-full bg-white rounded-t-3xl h-[85%] flex flex-col shadow-2xl animate-[slideUp_0.3s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">지역 설정</h2>
          <button onClick={onClose} className="p-2 -mr-2 text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-5 py-4">
          <div className="relative">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="동명(읍,면)으로 검색 (예: 동탄동)"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all"
            />
            <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
          </div>
        </div>

        {/* Current Location Button */}
        <div className="px-5 mb-2">
          <button 
            onClick={handleCurrentLocation}
            disabled={isLoading}
            className="w-full flex items-center justify-between p-4 bg-rose-50 border border-rose-100 rounded-2xl group active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isLoading ? 'bg-rose-100' : 'bg-white text-rose-500'}`}>
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Navigation size={20} className="fill-rose-500" />
                )}
              </div>
              <div className="text-left">
                <span className="block font-bold text-gray-900">
                  {isLoading ? '위치 확인 중...' : '현재 위치로 찾기'}
                </span>
                {!isLoading && (
                  <span className="text-xs text-gray-500">내 주변 병원·카페 정보를 추천해 드려요</span>
                )}
              </div>
            </div>
          </button>
          
          {/* Error Message Toast */}
          {errorMsg && (
            <div className="mt-2 text-xs text-rose-500 flex items-center gap-1 bg-rose-50 p-2 rounded-lg animate-pulse">
              <span className="font-bold">!</span> {errorMsg}
            </div>
          )}
        </div>

        {/* Scrollable Lists */}
        <div className="flex-1 overflow-y-auto px-5 pb-8 scrollbar-hide">
          {/* Recent Locations */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-400 mb-3 flex items-center gap-1">
              <Clock size={12} /> 최근 주소
            </h3>
            <div className="flex flex-wrap gap-2">
              {['화성시 동탄', '서울시 강남구', '부산 해운대구'].map((loc) => (
                <button 
                  key={loc}
                  onClick={() => handleManualSelect(loc)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-rose-200 hover:text-rose-500 transition-colors"
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 mb-3">주요 지역</h3>
            <div className="space-y-1">
              {['서울 강남구', '서울 서초구', '경기 성남시 분당구', '경기 수원시 영통구', '인천 연수구'].map((loc) => (
                <button 
                  key={loc}
                  onClick={() => handleManualSelect(loc)}
                  className="w-full text-left py-3 px-2 border-b border-gray-50 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2"
                >
                  <MapPin size={16} className="text-gray-300" />
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSheet;