const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchTemplate(id: number) {
  const response = await fetch(`${API_BASE_URL}/templates/${id}/`);
  if (!response.ok) {
    throw new Error("Error al obtener la plantilla");
  }
  return response.json();
}

export async function fetchContent(templateId: number) {
  const response = await fetch(`${API_BASE_URL}/templates/${templateId}/content/`);
  if (!response.ok) {
    throw new Error("Error al obtener el contenido dinámico");
  }
  const data = await response.json();
  return data[0]?.content || {}; // Devuelve solo el contenido dinámico
}
