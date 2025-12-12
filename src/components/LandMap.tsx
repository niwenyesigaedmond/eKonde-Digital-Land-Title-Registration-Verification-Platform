import { useState } from 'react';
import { MapPin, Navigation, Crosshair } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface LandMapProps {
  onLocationSelect?: (lat: number, lng: number) => void;
}

const LandMap = ({ onLocationSelect }: LandMapProps) => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');

  // Uganda center coordinates for embed
  const ugandaCenter = '1.3733,32.2903';

  const handlePositionChange = (lat: number, lng: number) => {
    setPosition([lat, lng]);
    setManualLat(lat.toFixed(6));
    setManualLng(lng.toFixed(6));
    onLocationSelect?.(lat, lng);
  };

  const getCurrentLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          handlePositionChange(pos.coords.latitude, pos.coords.longitude);
          setIsLocating(false);
          toast.success('Your location found! 🎯');
        },
        (error) => {
          setIsLocating(false);
          toast.error('Could not get your location', {
            description: 'Please enter coordinates manually below',
          });
        },
        { enableHighAccuracy: true }
      );
    } else {
      setIsLocating(false);
      toast.error('Geolocation not supported');
    }
  };

  const handleManualCoordinates = () => {
    const lat = parseFloat(manualLat);
    const lng = parseFloat(manualLng);
    
    if (isNaN(lat) || isNaN(lng)) {
      toast.error('Please enter valid coordinates');
      return;
    }
    
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      toast.error('Coordinates out of range');
      return;
    }
    
    handlePositionChange(lat, lng);
    toast.success('Location set! 📍');
  };

  const mapSrc = position
    ? `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50000!2d${position[1]}!3d${position[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1234567890`
    : `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2000000!2d32.2903!3d1.3733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1234567890`;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border-2 border-accent/30 shadow-red">
      {/* Map Header */}
      <div className="bg-primary/90 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary-foreground">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-heading font-semibold">Select Land Location</span>
          </div>
          <Button
            size="sm"
            variant="gold"
            onClick={getCurrentLocation}
            disabled={isLocating}
            className="shadow-gold"
          >
            {isLocating ? (
              <Crosshair className="w-4 h-4 animate-spin" />
            ) : (
              <Navigation className="w-4 h-4" />
            )}
            <span className="ml-2 hidden sm:inline">Use GPS</span>
          </Button>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="h-[300px] w-full">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Land Location Map"
        />
      </div>

      {/* Manual Coordinates Input */}
      <div className="bg-secondary/50 p-4 space-y-4">
        <p className="text-sm text-muted-foreground">
          Use GPS above or enter coordinates manually:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 space-y-1">
            <Label htmlFor="latitude" className="text-xs">Latitude</Label>
            <Input
              id="latitude"
              placeholder="e.g., 0.3476"
              value={manualLat}
              onChange={(e) => setManualLat(e.target.value)}
              className="h-9"
            />
          </div>
          <div className="flex-1 space-y-1">
            <Label htmlFor="longitude" className="text-xs">Longitude</Label>
            <Input
              id="longitude"
              placeholder="e.g., 32.5825"
              value={manualLng}
              onChange={(e) => setManualLng(e.target.value)}
              className="h-9"
            />
          </div>
          <div className="flex items-end">
            <Button 
              size="sm" 
              onClick={handleManualCoordinates}
              className="h-9"
            >
              Set Location
            </Button>
          </div>
        </div>
        
        {position && (
          <div className="flex items-center gap-2 text-sm text-accent">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Location set: {position[0].toFixed(4)}, {position[1].toFixed(4)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandMap;
