import { useState } from 'react';
import { CurriculumFlow } from './components/CurriculumFlow';
import { DocumentViewer } from './components/DocumentViewer';
import { documentMap } from '../data/documentMap';

interface SelectedSubject {
  id: string;
  label: string;
  color: string;
}

export default function App() {
  const [selected, setSelected] = useState<SelectedSubject | null>(null);

  const handleSubjectClick = (id: string, label: string, color: string) => {
    if (documentMap[id]) {
      setSelected({ id, label, color });
    }
  };

  return (
    <div className="size-full flex items-center justify-center">
      <CurriculumFlow onSubjectClick={handleSubjectClick} />
      {selected && documentMap[selected.id] && (
        <DocumentViewer
          title={selected.label}
          content={documentMap[selected.id]}
          color={selected.color}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
