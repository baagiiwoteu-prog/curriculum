import mongolianLanguage from './documents/Step7_Mongolian_Language_Full_Curriculum.txt?raw';
import literature from './documents/Step7_Literature_Full_Curriculum_Draft_Grades6-9.txt?raw';
import mathematics from './documents/Step7_Mathematics_Full_Curriculum_Grades6-9.txt?raw';
import biology from './documents/Step7_Biology_Full_Curriculum_Grades6-9.txt?raw';
import chemistry from './documents/Step7_Chemistry_Full_Curriculum_Grades6-9.txt?raw';
import socialStudies from './documents/Step7_Social_Studies_Full_Curriculum_Draft_Grades6-9.txt?raw';
import history from './documents/Step7_History_Full_Curriculum_Grades6-9.txt?raw';
import visualArts from './documents/Step7_Visual_Arts_Full_Curriculum_Draft_Grades6-9.txt?raw';
import geography from './documents/Step7_Geography_Full_Curriculum_Grades6-9.txt?raw';
import nationalScript from './documents/Step7_National_Script_Full_Curriculum_Grades6-9.txt?raw';
import physics from './documents/Step7_Physics_Full_Curriculum_Grades6-9.txt?raw';
import physicalEducation from './documents/Step7_Physical_Education_Full_Curriculum_Grades6-9.txt?raw';
import music from './documents/Step7_Music_Full_Curriculum_Grades6-9.txt?raw';
import healthEducation from './documents/Step7_Health_Education_Full_Curriculum_Grades6-9.txt?raw';
import computerScience from './documents/Step7_Computer_Science_Full_Curriculum_Grades6-9.txt?raw';
import designTechnology from './documents/Step7_Design_Technology_Full_Curriculum_Grades6-9.txt?raw';
import kazakhLanguage from './documents/Step7_Kazakh_Language_Full_Curriculum_Grades6-9.txt?raw';
import tuvaLanguage from './documents/Step7_Tuva_Language_Full_Curriculum_Grades6-9.txt?raw';

export const documentMap: Record<string, string> = {
  's3-mongolian': mongolianLanguage,
  's3-mongolian-script': nationalScript,
  's3-literature': literature,
  's3-math': mathematics,
  's3-biology': biology,
  's3-physics': physics,
  's3-chemistry': chemistry,
  's3-geography': geography,
  's3-society': socialStudies,
  's3-history': history,
  's3-visual-art': visualArts,
  's3-music': music,
  's3-design': designTechnology,
  's3-computer': computerScience,
  's3-physical': physicalEducation,
  's3-health': healthEducation,
  's3-kazakh': kazakhLanguage,
  's3-tuva': tuvaLanguage,
};

export interface Section {
  id: string;
  title: string;
  level: number;
  content: string;
  startIndex: number;
}

export function parseSections(text: string): Section[] {
  const lines = text.split('\n');
  const sections: Section[] = [];
  let currentSection: Section | null = null;
  let contentLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Match section headers like "A. Subject Purpose..." or "D.1 Role..." or "H.2.3 ..."
    const sectionMatch = trimmed.match(/^([A-K])\.(\d+(?:\.\d+)?)?\s+(.+)/);

    if (sectionMatch) {
      // Save previous section
      if (currentSection) {
        currentSection.content = contentLines.join('\n').trim();
        sections.push(currentSection);
      }

      const letter = sectionMatch[1];
      const subsection = sectionMatch[2] || '';
      const title = sectionMatch[3];
      const level = subsection ? (subsection.includes('.') ? 2 : 1) : 0;
      const id = subsection ? `${letter}.${subsection}` : letter;

      currentSection = {
        id,
        title: `${id}. ${title}`,
        level,
        content: '',
        startIndex: i,
      };
      contentLines = [];
    } else if (currentSection) {
      contentLines.push(line);
    } else {
      // Header lines before first section
      if (!sections.length && trimmed) {
        contentLines.push(line);
      }
    }
  }

  // Save last section
  if (currentSection) {
    currentSection.content = contentLines.join('\n').trim();
    sections.push(currentSection);
  }

  // If there were header lines before first section, add them as intro
  if (sections.length > 0 && !sections[0].id.match(/^[A-K]$/)) {
    // Already handled
  }

  return sections;
}
