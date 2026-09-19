export type Role = 'citizen' | 'authority' | 'hotel' | 'admin'
export interface ApiError { message: string; status?: number; code?: string }
export interface User { id: string; email: string; role: Role; displayName?: string }
export interface AuthResponse { user: User; accessToken?: string }
export interface FoodAnalysisRequest { frontImage: File; backImage?: File }
export interface Evidence { source: string; reference?: string }
export interface NutritionInformation { [key: string]: string | number | undefined }
export interface IngredientInformation { name: string; details?: string }
export interface FoodClaim { text: string; status?: string }
export interface VerificationResult { status: 'verified' | 'pending' | 'unavailable'; notes?: string }
export interface FoodAnalysisResponse { productInformation?: Record<string,string>; nutrition?: NutritionInformation; ingredients?: IngredientInformation[]; claims?: FoodClaim[]; concerns?: string[]; evidence?: Evidence[]; confidence?: number; verification?: VerificationResult }
export interface ComplaintEvidence { id?: string; file?: File; type: 'image' | 'audio' | 'text'; url?: string }
export interface ComplaintCreateRequest { category?: string; location?: string; establishment?: string; occurredAt?: string; description?: string; affectedPeople?: string; evidence?: ComplaintEvidence[] }
export interface ComplaintCreateResponse { id: string; status: string }
export interface RelatedComplaint { reference: string; reason?: string; confidence?: number }
export interface DuplicateDetectionResult { status: 'potential_duplicate' | 'related' | 'no_match' | 'processing' | 'unavailable'; related?: RelatedComplaint[] }
export interface RelationshipResult { complaintReference: string; relationship?: string; confidence?: number; incidentReference?: string }
export interface AIAnalysis { status: string; summary?: string; confidence?: number; evidence?: Evidence[]; verification?: VerificationResult; limitations?: string }
export interface Incident { id: string; priority?: string; status?: string; affectedComplaintCount?: number; location?: string; foodOrProduct?: string; establishment?: string; createdAt?: string; updatedAt?: string; riskLevel?: string; riskScore?: number; riskFactors?: string[]; analysis?: AIAnalysis; verification?: VerificationResult }
export interface IncidentDetail extends Incident { relatedComplaints?: RelatedComplaint[]; evidence?: Evidence[]; timeline?: Array<{ timestamp?: string; event?: string }>; commonFactors?: string[]; authorityActions?: Array<{ label?: string; timestamp?: string }>; resolution?: string }
export interface Alert { id: string; priority?: string; category?: string; source?: string; relatedComplaintCount?: number; incidentReference?: string; routing?: string; timestamp?: string; status?: string }
export interface AuthorityDashboard { complaintQueue?: unknown[]; priorityQueue?: unknown[]; activeIncidents?: Incident[]; alerts?: Alert[]; statusDistribution?: Array<{ label: string; value: number }>; resolutionTrends?: Array<{ label: string; value: number }> }
export interface ListResponse<T> { items: T[]; page?: number; pageSize?: number; total?: number }
