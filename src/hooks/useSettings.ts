import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Settings } from '../lib/supabase';

const FALLBACK: Settings = {
  id: 1,
  whatsapp_number: '6281234567890',
  pricelist_image_url: null,
  updated_at: '',
};

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(FALLBACK);

  useEffect(() => {
    if (!supabase) return;
    supabase
      .from('settings')
      .select('*')
      .eq('id', 1)
      .maybeSingle()
      .then(({ data }) => {
        if (data) setSettings(data);
      });
  }, []);

  return settings;
}