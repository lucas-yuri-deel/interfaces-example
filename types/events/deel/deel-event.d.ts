export interface EventDataEdm<D> {
  id: string;
  timestamp: number;
  version: number;
  subject: string;
  data: D;
  context: {
    source: {
      service: string;
    };
    environment: string;
  };
}
