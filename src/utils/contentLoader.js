import matter from 'gray-matter';

/**
 * Loads all markdown files from a specific collection directory.
 * @param {Object} modules - Result of import.meta.glob('...', { query: '?raw', eager: true })
 * @returns {Array} Array of parsed content objects
 */
export const loadCollection = (modules) => {
  return Object.keys(modules).map((path) => {
    const rawContent = modules[path].default || modules[path];
    const { data, content } = matter(rawContent);
    
    // Extract filename as slug if not provided in frontmatter
    const filename = path.split('/').pop().replace('.md', '');
    
    return {
      ...data,
      content,
      slug: data.slug || filename,
      path
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * Loads a single JSON file.
 * @param {Object} module - Imported JSON module
 * @returns {Object} The JSON data
 */
export const loadJSON = (module) => {
  return module.default || module;
};
