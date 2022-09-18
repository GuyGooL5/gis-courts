import courtsData from "$/data/courts.json";

export interface Coords {
  x: number;
  y: number;
}
export interface Court {
  id: number;
  coords: Coords;
  data: {
    name: string;
    type: string;
    city: string;
    address: string;
    info_center: string;
    info_url: string;
  };
}

const hashStringToHexColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
};

class CourtsService {
  private static readonly courts: Court[] = courtsData;
  private static readonly types: Set<string> = new Set(
    CourtsService.courts.map((court) => court.data.type)
  );
  private static readonly typeColors: Map<string, string> = new Map(
    Array.from(CourtsService.types).map((type) => [
      type,
      hashStringToHexColor(type),
    ])
  );

  public static getTypeColor(type: string): string {
    return CourtsService.typeColors.get(type) || "#000000";
  }

  public static getCourts(): Court[] {
    return CourtsService.courts;
  }

  public static getCourtTypes(): string[] {
    return Array.from(CourtsService.types);
  }

  public static queryByAny(query: string): Court[] {
    return CourtsService.courts.filter(
      (court) =>
        court.data.name.toLowerCase().includes(query.toLowerCase()) ||
        court.data.type.toLowerCase().includes(query.toLowerCase()) ||
        court.data.city.toLowerCase().includes(query.toLowerCase()) ||
        court.data.address.toLowerCase().includes(query.toLowerCase()) ||
        court.data.info_center.toLowerCase().includes(query.toLowerCase()) 
    );
  }

  public static getCourtById(id: number): Court | undefined {
    return CourtsService.courts.find((court) => court.id === id);
  }

  public static getCourtsByType(type: string): Court[] {
    return CourtsService.courts.filter((court) => court.data.type === type);
  }
}

export default CourtsService;
